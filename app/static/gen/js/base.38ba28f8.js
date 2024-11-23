// alert('here')
let three_d_interactable_container = $('#three_d_interactable_container')

if (three_d_interactable_container.length != 0){


    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth/window.innerHeight,
        0.1,
        1000
        )
    camera.position.z = 30


    var renderer = new THREE.WebGLRenderer({
        antialias: true
    })

    renderer.setClearColor(new THREE.Color('#111'))


    renderer.setSize(window.innerWidth, window.innerHeight)


    three_d_interactable_container.append(renderer.domElement)

    const hemi_light = new THREE.HemisphereLight( 0xFFFFFF, 10 );
    scene.add(hemi_light)


    const point_light = new THREE.PointLight(0xFFFFFF, 1, 2)
    point_light.position.set(-2, 7, -10);


    const particles_geomtery = new THREE.BufferGeometry;
    const particles_count = 10000/2;


    const position_array = new Float32Array(particles_count * 3)

    for (let i = 0; i < particles_count * 3; i++){
        position_array[i] = (Math.random() - 0.5) * 70
    }

    particles_geomtery.setAttribute('position', new THREE.BufferAttribute(position_array, 3))

    const particle_material = new THREE.PointsMaterial({
        // size: 0.010,
        size: 0.005,
        color: 'white',
    })

    const particles_mesh = new THREE.Points(particles_geomtery, particle_material)
    scene.add(particles_mesh)


    window.addEventListener('resize', ()=> {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix()
    })


    const clock = new THREE.Clock()


    var render = function (){

        requestAnimationFrame(render)


        let elasped_time = clock.getElapsedTime()


        particles_mesh.rotation.y = (.005 * elasped_time)

        renderer.domElement.id = 'globe_canvas';
        renderer.render(scene, camera)

    }

    render();


}