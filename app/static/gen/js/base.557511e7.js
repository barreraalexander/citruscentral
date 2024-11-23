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

    renderer.setClearColor(new THREE.Color('#000'))


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


    // animate the color of the particles here
    
    let colors = ['red', 'blue', 'green', 'white']
    let selected_color_index = 0


    function rgbParticles(event){


    }



    $( "#business_name_input" ).on( "keydown", function() {
        if (selected_color_index == colors.length){
            selected_color_index = -1
        } 


        selected_color_index += 1


        particles_mesh


    } );

    var render = function (){

        requestAnimationFrame(render)


        let elasped_time = clock.getElapsedTime()


        particles_mesh.rotation.y = (.005 * elasped_time)

        particle_material.color.set(0x00ff00)







        renderer.domElement.id = 'globe_canvas';
        renderer.render(scene, camera)



        


    }

    render();


}



// $('#landing_section').append(`
    
// `)
