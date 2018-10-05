import React from 'react';

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.onToggle = this.onToggle.bind(this);
        this.state = {
            details: true
        }
    }
    onToggle() {
        this.setState((prevState) => {
            return {
                details: !prevState.details
            }
        })
    }
    render() {
        return (
            <div className="container transition-item detail-page">
                <div className="container__left container__left--2">
                    <h1 className="heading-1">About Me</h1>
                    <h2 className="description">
                    {this.state.details ? `My background was in "accounting" and what I mean by that is, I worked in accounts receivables. There were many things I loved in that position, 
                    but also came with many things I hated. My hours consisted of clickings buttons here and there to perform some of my daily tasks, entering dollar amounts in the proper 
                    accounts and settling the correct invoices, and my favorite part of the day, "coding" Excel reports to automate many of the logical thinking that I no longer had to do. 
                    Even though I saw myself an intermediate user, I became the "Excel Guru" of the company. However, my affinity toward Excel and finding better ways to perform any task 
                    was met with a swift kick to my rear; I got the boot. I became lost. My original goal was to attend a coding bootcamp, but later realized after many hours of contemplating, 
                    I could learn this myself. So here's the fruit of my labor.` : `Bye, Accounts Receivables; hello, Web Development`}</h2>
                    <button onClick={this.onToggle}>tl;dr</button>
                </div>
                <img className="profile-image" src="./images/bear pic.jpg" alt="Bear pic"/>
                <div className="container__right container__right--2"></div>
            </div>
        )
    }
};

export default AboutPage;