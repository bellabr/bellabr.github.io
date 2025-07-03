export function load({ cookies }) {
	const visited = cookies.get('visited');

	cookies.set('visited', 'true', { path: '/' });

	return {
		visited
	};
}

/* */
// export function arachnophobia({ arachnophobia }) {


// 	return !arachnophobia;
// }