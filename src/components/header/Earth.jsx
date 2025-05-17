import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

// import Daymap from "/8k_earth_daymap.jpg"""""""
// import Nightmap from "/8k_earth_nightmap.jpg"
// import Cloudthmap from "/earth_clouds_1024.png"


const Earth = () => {
  const containerRef = useRef(null);
  const basePath = '/portfolio-website';
 
  const settings = {
    earthRadius: 5.3,
    cloudOffset: 0.1,
    earthRotationSpeed: 0.0015,
    cloudRotationSpeed: 0.0018,
    backgroundRotationSpeed: 0.0003,
    emissiveBase: -0.7,
    dayBrightness: 0.6,
    bloomStrength: 1.9,
    bloomThreshold: 0.9,
    bloomRadius: 0.1,
    directionalLightIntensity: 1.9,
    hemisphereLightIntensity: 1.1,
    transitionStart: 0.0,
    transitionEnd: 0.1,
    sharpness: 0.6,
    backgroundScale: 15,
  };

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      35, 
      container.clientWidth / container.clientHeight,
      0.1, 
      1000
    );
    camera.position.set(0, 6, 17); 
    camera.lookAt(new THREE.Vector3(0, 0, 0)); 

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      alpha: true,
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.domElement.style.background = "transparent";
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.borderRadius = "100%";
    container.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    const earthTexture = loader.load(`${basePath}/8k_earth_daymap.jpg`);
    const nightTexture = loader.load(`${basePath}/8k_earth_nightmap.jpg`);
    const cloudTexture = loader.load(`${basePath}/earth_clouds_1024.png`);

    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
    [earthTexture, nightTexture, cloudTexture].forEach((tex) => {
      tex.anisotropy = maxAnisotropy;
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.minFilter = THREE.LinearMipMapLinearFilter;
      tex.magFilter = THREE.LinearFilter;
    });

    const earthGeometry = new THREE.SphereGeometry(
      settings.earthRadius,
      256,
      256
    );
    const earthMaterial = new THREE.ShaderMaterial({
      uniforms: {
        dayTexture: { value: earthTexture },
        nightTexture: { value: nightTexture },
        emissiveIntensity: { value: settings.emissiveBase },
        lightDirection: { value: new THREE.Vector3(0, 0, 0).normalize() },
        sharpness: { value: settings.sharpness },
        transitionStart: { value: settings.transitionStart },
        transitionEnd: { value: settings.transitionEnd },
      },
      fragmentShader: `
        uniform sampler2D dayTexture;
        uniform sampler2D nightTexture;
        uniform float emissiveIntensity;
        uniform vec3 lightDirection;
        uniform float sharpness;
        uniform float transitionStart;
        uniform float transitionEnd;
        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {
          float dotProd = max(dot(normalize(vNormal), lightDirection), -5.0);
          float transition = smoothstep(transitionStart, transitionEnd, dotProd * sharpness);
          vec4 dayColor = texture2D(dayTexture, vUv);
          dayColor.rgb *= ${settings.dayBrightness};
          vec4 nightColor = texture2D(nightTexture, vUv);
          vec4 color = mix(dayColor, nightColor, 1.0 - transition);
          vec3 emissive = nightColor.rgb * emissiveIntensity * (1.0 - transition);
          gl_FragColor = vec4(color.rgb + emissive, 1.0);
        }
      `,
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earthMesh);
    earthMesh.rotation.y = -Math.PI / 1; // حدود 90 درجه چرخش به راست برای نمایش آسیا


    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
    });
    const cloudGeometry = new THREE.SphereGeometry(
      settings.earthRadius + settings.cloudOffset,
      256,
      256
    );
    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(cloudMesh);

    const hemiLight = new THREE.HemisphereLight(
      0x222233,
      settings.hemisphereLightIntensity
    );
    scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight(
      0xffffff,
      settings.directionalLightIntensity
    );
    sunLight.position.set(25, 12, 12);
    scene.add(sunLight);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(container.clientWidth, container.clientHeight),
      settings.bloomStrength,
      settings.bloomRadius,
      settings.bloomThreshold
    );
    composer.addPass(bloomPass);

    let animationFrameId;
    const animate = () => {
      earthMesh.rotation.y += settings.earthRotationSpeed;
      cloudMesh.rotation.y += settings.cloudRotationSpeed;

      const lightDirection = new THREE.Vector3()
        .copy(sunLight.position)
        .normalize();
      const dot = new THREE.Vector3(0, 0, 0).dot(lightDirection);
      const nightLightIntensity = Math.max(0, 1 - Math.abs(dot));

      if (dot > 0) {
        earthMaterial.uniforms.emissiveIntensity.value = 0;
      } else {
        earthMaterial.uniforms.emissiveIntensity.value =
          nightLightIntensity * settings.emissiveBase;
      }

      earthMaterial.uniforms.lightDirection.value.copy(lightDirection);
      composer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      composer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      composer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="aspect-square overflow-hidden w-full h-auto "
    ></div>
  );
};

export default Earth;
