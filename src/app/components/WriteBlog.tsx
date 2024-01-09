import Nav from "./nav";

export default function WriteBlog() {
  return (
    <div className="bg-[#FAFAFA]">
      <Nav />
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
        <form className="space-y-6">
          <h2 className="text-3xl font-bold mb-6">Write your Blog</h2>
          <div className="flex flex-col">
            <label htmlFor="title" className="text-lg mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter your title..."
              className="p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="blogType" className="text-lg mb-1">
              Type of Blog
            </label>
            <input
              type="text"
              id="blogType"
              placeholder="e.g., Travel, Technology..."
              className="p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="blogContent" className="text-lg mb-1">
              Blog Content
            </label>
            <textarea
              id="blogContent"
              placeholder="Share your thoughts..."
              className="p-3 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="image" className="text-lg mb-1">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              placeholder="Paste your image URL..."
              className="p-3 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
