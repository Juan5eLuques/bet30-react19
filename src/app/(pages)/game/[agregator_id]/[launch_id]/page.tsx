export default async function Game({
    params,
}: {
    params: Promise<{ launch_id: string }>
}) {
    const slug = (await params).launch_id
    return <div>Tag : {slug}</div>
}

