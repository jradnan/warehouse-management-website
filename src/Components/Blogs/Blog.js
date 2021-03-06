import React from 'react'
import jwt from '../Images/jwt.png'
import mongos from '../Images/mongos.png'

const Blogs = () => {
    return (
        <div className='container mt-5'>
            
            <div className="">
                <div className='mt-4'>
                    <img className='img-fluid' src="https://static.javatpoint.com/javascriptpages/images/javascript-vs-nodejs.png" alt="" />
                    <ol className='mt-4'>
                        <li>
                            Javascript is used in frontend development but Nodejs is used in server-side development.

                        </li>
                        <li>
                            Javascript is capable enough to add HTML and play with the DOM but Nodejs does not have capability to add HTML tags.

                        </li>
                        <li>
                            Javascript can only be run in the browsers and to run JavaScript outside we need help of node.js.
                        </li>
                        <li>
                            Javascript is a programming language that is used for writing scripts on the website but NodeJS is a Javascript runtime environment.
                        </li>
                        <li>
                            Javascript is used on the client-side but node js mostly used on the server-side.
                        </li>
                    </ol>
                </div>

                


                <div className='mt-4'>
                    <img className='img-fluid' src={mongos} alt="" />
                    <p>
                        NodeJS is a Javascript runtime environment. Nodejs is used in server-side development. It is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.
                        MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc...
                        These two technologies are for different parts of a typical web server system. You don't substitute one for the other. Instead, you can use them together.
                    </p>
                </div>

                <div className='mt-4'>
                    <img className='img-fluid' src="https://blog.devart.com/wp-content/uploads/2021/12/sql-nosql.png" alt="" />
                    <ol>
                        <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                        <li>
                            SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                        </li>
                        <li>
                            SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                        </li>
                        <li>
                            SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                        </li>
                        <li>
                            SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                        </li>
                    </ol>
                </div>




                <div>
                    <img className='img-fluid' src={jwt} alt="" />
                    <p>
                        JWT, or JSON Web Token, is an open standard used to share information between two parties securely ??? a client and a server. In most cases, it's an encoded JSON containing a set of claims and a signature. It's usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It's also a popular way to authenticate/authorize users in a microservice architecture.
                        When it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server. By sharing a secret key with the Identity Provider, the Service Provider can hash a part of a token it receives and compare it to the signature of the token. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key.
                    </p>
                </div>



            </div>
        </div>
    )
}

export default Blogs