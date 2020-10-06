import React from 'react';
import { Link } from 'react-router-dom';

const HomeInformation = (props) => {
    const { img, title, id } = props.activity;
    return (

        <div className="justify-content-around">
            <div className="col-md-3 my-1">
                <Link to = {`/registration/${id}`}>
                <div className="card rounded" style={{ backgroundColor: '#007bff', width: '200px' }}>
                    <img className="card-img-top img-fluid" src={img} alt="volunteer activity" />
                    <div className="card-body ">
                        <h6 className="text-center" style={{ color: 'white'}}>
                            {title}
                        </h6>

                    </div>

                </div>
                </Link> 

            </div>

        </div>




    );
};

export default HomeInformation;