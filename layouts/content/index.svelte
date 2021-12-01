<script>
	export let title, intro, components, content, allContent;
	import Grid from '../components/grid.svelte';
	import Uses from "../components/source.svelte";
	import Pager from "../components/pager.svelte";
 	import { onMount } from 'svelte';
  import * as THREE from 'three';

  let el;
  onMount(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  let renderer;
  scene.add(cube);
  camera.position.z = 5;

  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  const resize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  };

  const createScene = (el) => {
    renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
    resize();
    animate();
  }

    createScene(el)
  });

	$: currentPage = content.pager;
	let postsPerPage = 3;
	let allPosts = allContent.filter(content => content.type == "blog");
	let totalPosts = allPosts.length;
	let totalPages = Math.ceil(totalPosts / postsPerPage);
	$: postRangeHigh = currentPage * postsPerPage;
	$: postRangeLow = postRangeHigh - postsPerPage;
</script>

<h1>{title}</h1>

<canvas bind:this={el}></canvas>

<section id="intro">
	{#each intro as paragraph}
		<p>{@html paragraph}</p>
	{/each}
</section>

<div>
	<h3>Recent blog posts:</h3>
	<Grid items={allPosts} {postRangeLow} {postRangeHigh} />
	<br />
</div>
<Pager {currentPage} {totalPages} />

<Uses {content} />
