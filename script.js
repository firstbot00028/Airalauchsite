// Basic Three.js setup for a simple rotating 3D object
let scene, camera, renderer, object;

function initThreeJS() {
    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-container').appendChild(renderer.domElement);

    // Object (e.g., a simple dodecahedron or custom loaded model)
    const geometry = new THREE.DodecahedronGeometry(1.5, 0); // A complex shape
    const material = new THREE.MeshPhongMaterial({
        color: 0x4facfe,
        specular: 0x00f2fe,
        shininess: 100,
        flatShading: false
    });
    object = new THREE.Mesh(geometry, material);
    scene.add(object);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        object.rotation.x += 0.005;
        object.rotation.y += 0.005;
        renderer.render(scene, camera);
    }
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Initialize Three.js when the DOM is ready
document.addEventListener('DOMContentLoaded', initThreeJS);

// Optional: Scroll-based animations (concept - needs more advanced implementation)
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    // Example: change object position/rotation based on scroll
    // object.position.y = -scrollPosition * 0.01;
});
