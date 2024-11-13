export default async function Tag({
    params,
}: {
    params: Promise<{ tag: string }>
}) {
    const slug = (await params).tag
    return <div>Tag : {slug}</div>
}

