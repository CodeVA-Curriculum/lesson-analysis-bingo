export async function load({ params }) {
    // TODO: find the tags from the lessons linked via params
    return {
        tags: [ "Lorem", "ipsum", "dolor", "sit", "amet",
                "Lorem", "ipsum", "dolor", "sit", "amet",
                "Lorem", "ipsum", "FREE SPACE", "sit", "amet",
                "Lorem", "ipsum", "dolor", "sit", "amet",
                "Lorem", "ipsum", "dolor", "sit", "amet",
            ]
    }
}

export const prerender = true;