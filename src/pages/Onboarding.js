import React, { useState } from 'react';
import Nav from './components/Nav';

const Onboarding = () => {
    const [formData, setFormData] = useState({
        user_id: "",
        first_name: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        show_gender: false,
        gender_identity: 'man',
        job_interest: '',
        email: "",
        url: "",
        bio: '',
        matches: []
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        // Add your form submission logic here
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    console.log(formData);

    return (
        <>
            <Nav minimal={true} setShowModal={() => {}} showModal={false} />

            <div className="onboarding">
                <h2>CREATE ACCOUNT</h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name"> Name </label>
                        <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            placeholder='First Name'
                            required={true}
                            value={formData.first_name}
                            onChange={handleChange}
                        />

                        <label>Birthday</label>
                        <div className='multiple-input-container'>
                            <input
                                id="dob_day"
                                type="number"
                                name="dob_day"
                                placeholder='DD'
                                required={true}
                                value={formData.dob_day}
                                onChange={handleChange}
                            />
                            <input
                                id="dob_month"
                                type="number"
                                name="dob_month"
                                placeholder='MM'
                                required={true}
                                value={formData.dob_month}
                                onChange={handleChange}
                            />
                            <input
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder='YYYY'
                                required={true}
                                value={formData.dob_year}
                                onChange={handleChange}
                            />
                        </div>

                        <label>Gender</label>
                        <div className='multiple-input-container'>
                            <input
                                id="man_gender_identity"
                                type="radio"
                                name="gender_identity"
                                required={true}
                                value={"man"}
                                onChange={handleChange}
                                checked={formData.gender_identity === 'man'}
                            />
                            <label htmlFor="man_gender_identity">Man</label>
                            <input
                                id="woman_gender_identity"
                                type="radio"
                                name="gender_identity"
                                required={true}
                                value={"woman"}
                                onChange={handleChange}
                                checked={formData.gender_identity === 'woman'}
                            />
                            <label htmlFor="woman_gender_identity">Woman</label>
                            <input
                                id="other_gender_identity"
                                type="radio"
                                name="gender_identity"
                                required={true}
                                value={"others"}
                                onChange={handleChange}
                                checked={formData.gender_identity === 'others'}
                            />
                            <label htmlFor="other_gender_identity">Others</label>
                        </div>

                        <label htmlFor="show_gender">Show Gender on my profile</label>
                        <input
                            id="show_gender"
                            type="checkbox"
                            name="show_gender"
                            onChange={handleChange}
                            checked={formData.show_gender}
                        />

                        <label>Show Me</label>
                        <div className="multiple-input-container">
                            <input
                                id="job_interest_job"
                                type="radio"
                                name="job_interest"
                                required={true}
                                value={"job"}
                                onChange={handleChange}
                                checked={formData.job_interest === 'job'}
                            />
                            <label htmlFor="job_interest_job">Job</label>
                            <input
                                id="job_interest_hiring"
                                type="radio"
                                name="job_interest"
                                required={true}
                                value={"hiring"}
                                onChange={handleChange}
                                checked={formData.job_interest === 'hiring'}
                            />
                            <label htmlFor="job_interest_hiring">Hiring</label>
                        </div>

                        <label htmlFor="bio">My Bio</label>
                        <input
                            id="bio"
                            type="text"
                            name="bio"
                            required={true}
                            placeholder="I am Skilled in MERN Stack"
                            value={formData.bio}
                            onChange={handleChange}
                        />
                        <input type="submit" />
                    </section>

                    <section>
                        <label htmlFor="url">Profile Photo</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className='photo-container'>
                            <img src={formData.url} alt="profile pic preview" />
                        </div>
                    </section>
                </form>
            </div>
        </>
    );
};

export default Onboarding;