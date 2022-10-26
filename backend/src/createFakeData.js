import { array } from '../node_modules/joi/lib/index';
import Post from './module/post';

export default function createFakeData() {
	const posts = [...Array(40).keys()].map((i) => ({
		title: `포스트 #${i}`,
		body: "1",
		tags: ['가짜', '데이터'],
	}));

	Post.insertMany(posts, (err, docs) => {
		console.log(docs);
	});
}
