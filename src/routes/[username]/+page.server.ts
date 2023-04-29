import db from '$lib/server/database';

export const load = async ({ params }) => {
	const {username} = params;
    const user = await db.authUser.findUnique({where: {username}});
    if (!user) return {status: 404};
    return {status: 200, body: {user}};
}

