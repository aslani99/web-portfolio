import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Navbar from './Navbar';
// import Earth from './Earth';

const StarBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 1;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Load background texture
    const textureLoader = new THREE.TextureLoader();
    const bgTexture = textureLoader.load('/2k_stars_milky_way.jpg', () => {
      bgTexture.colorSpace = THREE.SRGBColorSpace;
      bgTexture.minFilter = THREE.LinearMipMapLinearFilter;
      bgTexture.magFilter = THREE.LinearFilter;
      bgTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    });

    // Create background sphere
    const geometry = new THREE.SphereGeometry(100, 64, 64);
    const material = new THREE.MeshBasicMaterial({
      map: bgTexture,
      side: THREE.BackSide,
    });
    const backgroundSphere = new THREE.Mesh(geometry, material);
    scene.add(backgroundSphere);

    // Animation loop
    let animationId;
    const animate = () => {
      backgroundSphere.rotation.y += 0.0005; // چرخش آهسته
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    // Resize handling
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);
  
  return (
    <div
    ref={containerRef}
    // style={{ width: '100vw', height: '100vh', position: 'relative', zIndex: 0 }}
    className='w-full h-250 bg-cover bg-center'
    >
      <Navbar />

    </div>
  );
};


export default StarBackground;