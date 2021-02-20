import React from 'react'

const Hero = () => {
    return (
        <div style={{height : '100vh', background : 'red'}}>
            <div className="ui vertical stripe segment">
                <div className="container grid ui middle aligned stackable">
                    <div className="row">
                        <div className="eight wide column">
                            <h3 className="ui header">We Help Companies and Companions</h3>
                            <p>We can give your company superpowers to do things that they never thought possible. Let us delight your customers and empower your needs...through pure data analytics.</p>
                            <h3 className="ui header">We Make Bananas That Can Dance</h3>
                            <p>Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.</p>
                        </div>
                        <div className="six wide right floated column">
                            <img src="/images/white-image.png" alt='alting' className="rounded ui small bordered image" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="center aligned column">
                            <a className="ui huge button">Check Them Out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
