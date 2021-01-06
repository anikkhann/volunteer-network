import React from 'react';
import logos from '../../logos/extraVolunteer.png'
const EventInformation = (props) => {
    const { organization, date, _id } = props.registrationData;
    const handleDeleteActivity = (id) => {
        console.log(id);
        fetch(`https://protected-refuge-94692.herokuapp.com/deleteActivity/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
               
            })
    }
    return (


        <div className="container mt-5">
        <div className="row ">
           
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="card  mb-3" style={{ maxWidth: "700px" }}>
                            <div className="row no-gutters ">
                                <div className="col-md-4 p-2">
                                    <img src={logos} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h4 className="font-weight-bold card-title">{organization}</h4>
                                        <b className="card-text">{date}</b> <br />
                                        <div className="mt-5 d-flex justify-content-end">
                                            <button onClick={(() => handleDeleteActivity(_id))}
                                                style={{ backgroundColor: '#dbdbdb' }}
                                                className="btn pl-4 pr-4">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                {/* <div className="col-md-6">
                        <div className="card mb-3" style={{ maxWidth: "540px" }}>
                            <div className="row no-gutters">
                                <div className="col-md-4 p-2">
                                    <img src={logos} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h4 className="font-weight-bold card-title">{organization}</h4>
                                        <b className="card-text">{date}</b> <br />
                                        <div className="mt-5 d-flex justify-content-end">
                                            <button onClick={(() => handleDeleteActivity(_id))}
                                                style={{ backgroundColor: '#dbdbdb' }}
                                                className="btn pl-4 pr-4">
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                
            
        </div>
    </div>

      

    );
};

export default EventInformation;