import React from 'react';
import faker from 'faker';


const Team = (props)=>{
    return(
        <div className={'container teamArea'}>
            <div className="row">
                <div className="col text-center team-area-title">
                    <h2>Our Team</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card cardProduct">
                        <img className="card-img-top" src={faker.fake('{{image.people}}')} alt={'image'}/>
                        <div className="card-body">
                            <h5 className="card-title">{faker.fake('{{name.firstName}} {{name.lastName}}')}</h5>
                            <p className="card-text">{faker.fake('{{name.jobTitle}}')}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card cardProduct">
                        <img className="card-img-top" src={faker.fake('{{image.people}}')} alt={'image'}/>
                        <div className="card-body">
                            <h5 className="card-title">{faker.fake('{{name.firstName}} {{name.lastName}}')}</h5>
                            <p className="card-text">{faker.fake('{{name.jobTitle}}')}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card cardProduct">
                        <img className="card-img-top" src={faker.fake('{{image.people}}')} alt={'image'}/>
                        <div className="card-body">
                            <h5 className="card-title">{faker.fake('{{name.firstName}} {{name.lastName}}')}</h5>
                            <p className="card-text">{faker.fake('{{name.jobTitle}}')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;