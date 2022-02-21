import axios from "axios"

interface Post {
	postId: string | null,
	postUserId: number,
	postContent: string,
	postTitle: string
}

	// @ts-ignore
async function downloadPosts() {
		try {
			const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
			const  posts : Post[] = []

				for(let currentPost of data) {
					let post : Post = {
						postId: null,
						postUserId: currentPost.userId,
						postContent: currentPost.body,
						postTitle: currentPost.title
					}
					// await insertPost(post)
					posts.push(post)
				}
			console.log(posts)

		} catch (error) {
			console.error(error)
		}
	}


downloadPosts().catch(error => console.error(error))