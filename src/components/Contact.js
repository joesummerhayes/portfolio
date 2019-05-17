import React from 'react';

export class Contact extends React.Component {
    render() {
        return (
            <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <h2>Want to Contact me?</h2>
                    <form className="mt-5" action="https://formspree.io/joesummerhayes09@hotmail.com" method="POST">
                        <div className="form-group">
                            <input type="text" name="firstName" className="form-control" placeholder="name" />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="subject" className="form-control" placeholder="subject" />
                        </div>
                        <div className="form-group">
                            <textarea name="message" className="form-control" rows="10" placeholder="What would you like to get in touch about?" />
                        </div>
                        <div className="form-group mt-3">
                            <input type="submit" value="send" className="form-control bg text-white" style={{backgroundColor:"var(--main2)"}} />
                        </div>
                    </form>

                </div>
            </div>
        </section>
        )
    }
}