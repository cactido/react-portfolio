import React from 'react';

const Contact = () => {
    return (
        <div className="text-gray-100">
            <div className="px-4 py-4 static">
                <div className="lg:w-128 w-full lg:p-5">
                    <p className="text-3xl">Contact Me</p>
                    <p className="text-base mx-2">Ut eget libero tincidunt, consequat metus eu, vulputate purus. Vestibulum scelerisque ornare tempor. </p>
                </div>
                <div className="xl:absolute top-20 right-20 w-96 p-5 mt-5 mx-auto rounded-md bg-bluegray-600">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-200 text-sm font-bold mb-2" for="name">
                                Your Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-200 text-sm font-bold mb-2" for="email">
                                Your Email Address
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email address" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-200 text-sm font-bold mb-2" for="email">
                                Message
                            </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Message" />
                        </div>
                        <div className="flex float-right">
                            <button className="bg-blue-900 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none" type="button">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;