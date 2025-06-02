import Image from "next/image"

export default function EverythingsInternationalPage() {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">American Stories: Through My Eyes</h1>
            <p className="mb-6">
                If I had whispered to my fifteen-year-old self that she would one day be sitting here, watching an American sunset paint the sky in shades of possibility, she would have laughed and said, "Are you kidding me?" Yet here I am, living a dream that once seemed as distant as the stars.
            </p>
            <p className="mb-6">
                Being an international student means joining a chorus of dreamers—maybe fifty in my circle alone—all pursuing that same golden horizon called "abroad." But here's what I've learned: just because everyone is chasing similar dreams doesn't make your story any less extraordinary. Every sunset looks different through different eyes, every experience carries its own magic, and every moment becomes uniquely yours.
            </p>
            <p className="mb-10">
                While there's so much to share from this incredible journey, I want to paint you pictures of my American stories, one dreamy chapter at a time.
            </p>

            <div className="mb-10 border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row gap-6 bg-white">
                <div className="relative aspect-[3/4] md:aspect-[4/3] w-full md:w-1/3">
                    <Image
                        src="/international/apple.jpg"
                        alt="Anderson Orchard"
                        fill
                        className="rounded-xl object-cover"
                    />
                </div>


                <div>
                    <h2 className="text-2xl font-semibold mb-2">Anderson Orchard – Apple Picking</h2>
                    <p className="text-sm text-gray-600 mb-4">
                        My first official outing took me to Anderson Orchard in Mooresville, Indiana, for apple picking—something completely new to me since it's not common where I'm from. Walking through rows of apple trees, filling bags with fruit we picked ourselves, felt like stepping into a movie. There was a country music band playing, fresh apple cider brewing, and pumpkin pies baking. We cleaned and ate apples straight from the tree, and honestly, it was perfect. Just a great way to experience nature, try something new, and taste what autumn really means here.
                    </p>
                </div>
            </div>

            <div className="mb-10 border-t border-gray-300"></div>

            <div className="mb-10 border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row gap-6 bg-white">
                <div className="relative aspect-square md:aspect-[4/3] w-full md:w-1/3">
                    <Image
                        src="/international/halloween.jpg"
                        alt="Anderson Orchard"
                        fill
                        className="rounded-xl object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Halloween</h2>
                    <p className="text-sm text-gray-600 mb-4">
                        I'd been obsessed with Halloween ever since watching it in English series, so when the chance came to visit Forbidden Hollows Haunted Farm in Bedford, Indiana, I had to go. It was a chilly night filled with haunted treks through dark woods and hay rides that had my heart racing. The best part wasn't even the scares—it was afterward, sitting with hot chocolate under the night sky, laughing with friends and strangers who'd become companions in the adventure. I was dealing with some homesickness and exam stress at the time, so sipping that warm drink while looking at the stars and thinking of my family miles away felt both nostalgic and comforting. Seeing everyone laugh together made me realize I wasn't alone in this journey—we're all figuring it out together.
                    </p>
                </div>
            </div>
        </div>
    )
}
