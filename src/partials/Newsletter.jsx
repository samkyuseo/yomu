import React from 'react';

function Newsletter() {
  return (
    <section className="relative">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
            <h2 className="h2 mb-4">Sign up to get early access</h2>
            <p className="text-xl text-gray-600">No spam guaranteed.</p>
          </div>
          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="First Name" required />
                </div>
                <div className="mt-3 w-full px-3">
                  <input id="name" type="name" className="form-input w-full text-gray-800" placeholder="Email" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Notify me!</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
