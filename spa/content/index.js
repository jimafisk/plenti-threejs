/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	append,
	attr,
	binding_callbacks,
	children,
	claim_component,
	claim_element,
	claim_space,
	claim_text,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	element,
	init,
	insert,
	mount_component,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out
} from '../web_modules/svelte/internal/index.mjs';

import Grid from '../components/grid.js';
import Uses from '../components/source.js';
import Pager from '../components/pager.js';
import { onMount } from '../web_modules/svelte/index.mjs';
import * as THREE from '../web_modules/three/build/three.module.js';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[13] = list[i];
	return child_ctx;
}

// (57:1) {#each intro as paragraph}
function create_each_block(ctx) {
	let p;
	let raw_value = /*paragraph*/ ctx[13] + "";

	return {
		c() {
			p = element("p");
		},
		l(nodes) {
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			p_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert(target, p, anchor);
			p.innerHTML = raw_value;
		},
		p(ctx, dirty) {
			if (dirty & /*intro*/ 2 && raw_value !== (raw_value = /*paragraph*/ ctx[13] + "")) p.innerHTML = raw_value;;
		},
		d(detaching) {
			if (detaching) detach(p);
		}
	};
}

function create_fragment(ctx) {
	let h1;
	let t0;
	let t1;
	let canvas;
	let t2;
	let section;
	let t3;
	let div;
	let h3;
	let t4;
	let t5;
	let grid;
	let t6;
	let br;
	let t7;
	let pager;
	let t8;
	let uses;
	let current;
	let each_value = /*intro*/ ctx[1];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	grid = new Grid({
			props: {
				items: /*allPosts*/ ctx[7],
				postRangeLow: /*postRangeLow*/ ctx[6],
				postRangeHigh: /*postRangeHigh*/ ctx[4]
			}
		});

	pager = new Pager({
			props: {
				currentPage: /*currentPage*/ ctx[3],
				totalPages: /*totalPages*/ ctx[8]
			}
		});

	uses = new Uses({ props: { content: /*content*/ ctx[2] } });

	return {
		c() {
			h1 = element("h1");
			t0 = text(/*title*/ ctx[0]);
			t1 = space();
			canvas = element("canvas");
			t2 = space();
			section = element("section");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t3 = space();
			div = element("div");
			h3 = element("h3");
			t4 = text("Recent blog posts:");
			t5 = space();
			create_component(grid.$$.fragment);
			t6 = space();
			br = element("br");
			t7 = space();
			create_component(pager.$$.fragment);
			t8 = space();
			create_component(uses.$$.fragment);
			this.h();
		},
		l(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, /*title*/ ctx[0]);
			h1_nodes.forEach(detach);
			t1 = claim_space(nodes);
			canvas = claim_element(nodes, "CANVAS", {});
			children(canvas).forEach(detach);
			t2 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { id: true });
			var section_nodes = children(section);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(section_nodes);
			}

			section_nodes.forEach(detach);
			t3 = claim_space(nodes);
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			h3 = claim_element(div_nodes, "H3", {});
			var h3_nodes = children(h3);
			t4 = claim_text(h3_nodes, "Recent blog posts:");
			h3_nodes.forEach(detach);
			t5 = claim_space(div_nodes);
			claim_component(grid.$$.fragment, div_nodes);
			t6 = claim_space(div_nodes);
			br = claim_element(div_nodes, "BR", {});
			div_nodes.forEach(detach);
			t7 = claim_space(nodes);
			claim_component(pager.$$.fragment, nodes);
			t8 = claim_space(nodes);
			claim_component(uses.$$.fragment, nodes);
			this.h();
		},
		h() {
			attr(section, "id", "intro");
		},
		m(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, canvas, anchor);
			/*canvas_binding*/ ctx[11](canvas);
			insert(target, t2, anchor);
			insert(target, section, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(section, null);
			}

			insert(target, t3, anchor);
			insert(target, div, anchor);
			append(div, h3);
			append(h3, t4);
			append(div, t5);
			mount_component(grid, div, null);
			append(div, t6);
			append(div, br);
			insert(target, t7, anchor);
			mount_component(pager, target, anchor);
			insert(target, t8, anchor);
			mount_component(uses, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*title*/ 1) set_data(t0, /*title*/ ctx[0]);

			if (dirty & /*intro*/ 2) {
				each_value = /*intro*/ ctx[1];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(section, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			const grid_changes = {};
			if (dirty & /*postRangeLow*/ 64) grid_changes.postRangeLow = /*postRangeLow*/ ctx[6];
			if (dirty & /*postRangeHigh*/ 16) grid_changes.postRangeHigh = /*postRangeHigh*/ ctx[4];
			grid.$set(grid_changes);
			const pager_changes = {};
			if (dirty & /*currentPage*/ 8) pager_changes.currentPage = /*currentPage*/ ctx[3];
			pager.$set(pager_changes);
			const uses_changes = {};
			if (dirty & /*content*/ 4) uses_changes.content = /*content*/ ctx[2];
			uses.$set(uses_changes);
		},
		i(local) {
			if (current) return;
			transition_in(grid.$$.fragment, local);
			transition_in(pager.$$.fragment, local);
			transition_in(uses.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(grid.$$.fragment, local);
			transition_out(pager.$$.fragment, local);
			transition_out(uses.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(h1);
			if (detaching) detach(t1);
			if (detaching) detach(canvas);
			/*canvas_binding*/ ctx[11](null);
			if (detaching) detach(t2);
			if (detaching) detach(section);
			destroy_each(each_blocks, detaching);
			if (detaching) detach(t3);
			if (detaching) detach(div);
			destroy_component(grid);
			if (detaching) detach(t7);
			destroy_component(pager, detaching);
			if (detaching) detach(t8);
			destroy_component(uses, detaching);
		}
	};
}

let postsPerPage = 3;

function instance($$self, $$props, $$invalidate) {
	let currentPage;
	let postRangeHigh;
	let postRangeLow;

	let { title } = $$props,
		{ intro } = $$props,
		{ components } = $$props,
		{ content } = $$props,
		{ allContent } = $$props;

	let el;

	onMount(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		const geometry = new THREE.BoxGeometry();
		const material = new THREE.MeshBasicMaterial({ color: 65280 });
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
			renderer.setSize(window.innerWidth * 0.8, window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
		};

		const createScene = el => {
			renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
			resize();
			animate();
		};

		window.addEventListener("resize", resize);
		createScene(el);
	});

	let allPosts = allContent.filter(content => content.type == "blog");
	let totalPosts = allPosts.length;
	let totalPages = Math.ceil(totalPosts / postsPerPage);

	function canvas_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			el = $$value;
			$$invalidate(5, el);
		});
	}

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("intro" in $$props) $$invalidate(1, intro = $$props.intro);
		if ("components" in $$props) $$invalidate(9, components = $$props.components);
		if ("content" in $$props) $$invalidate(2, content = $$props.content);
		if ("allContent" in $$props) $$invalidate(10, allContent = $$props.allContent);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*content*/ 4) {
			$: $$invalidate(3, currentPage = content.pager);
		}

		if ($$self.$$.dirty & /*currentPage*/ 8) {
			$: $$invalidate(4, postRangeHigh = currentPage * postsPerPage);
		}

		if ($$self.$$.dirty & /*postRangeHigh*/ 16) {
			$: $$invalidate(6, postRangeLow = postRangeHigh - postsPerPage);
		}
	};

	return [
		title,
		intro,
		content,
		currentPage,
		postRangeHigh,
		el,
		postRangeLow,
		allPosts,
		totalPages,
		components,
		allContent,
		canvas_binding
	];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			title: 0,
			intro: 1,
			components: 9,
			content: 2,
			allContent: 10
		});
	}
}

export default Component;