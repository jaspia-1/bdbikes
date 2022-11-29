import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='mx-auto container  my-10 '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <div className="card w-96 bg-blue-900 shadow-xl image-full">

                        <div className="card-body">
                            <h2 className="card-title"> What are the different ways to manage a state in a React application?</h2>
                            <p>The Four Kinds of React State to Manage
                                When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                                There are four main types of state you need to properly manage in your React apps:

                                Local state,
                                Global state,
                                Server state,
                                URL state  </p>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">

                        <div className="card-body">
                            <h2 className="card-title">   How does prototypical inheritance work?</h2>
                            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. </p>

                        </div>
                    </div>
                    <div className="card w-96 bg-blue-800 shadow-xl image-full">

                        <div className="card-body">
                            <h2 className="card-title"> What is a unit test? Why should we write unit tests?</h2>
                            <p>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected.Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end. </p>

                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">

                        <div className="card-body">
                            <h2 className="card-title">    React vs. Angular vs. Vue?</h2>
                            <p>Speaking of architecture, Angular.js is a full-fledged MVC framework that provides you with all the possibilities for out-of-the-box programming.React.js, on the other hand, is a library that just offers the view,Angular.js uses the two-way binding. The state of the model is changed first, and then the modification of the interface element is reflected. Vue.js has better performance thanks to the virtual DOM, which is useful for complicated programs. </p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;