import { useState } from "react";

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
        setErrors({ ...errors, [e.target.name]: ""})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Submitted:", formData);
            alert("Thank you for your feedback!")
            setFormData({ name: "", email: "", feedback: "" })
        }
    }

    const validate = () => {
        const newErrors = {};
        // name not empty
        if (!formData.name.trim()) newErrors.name = "Name is required";
        // email is valid email
        if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) newErrors.email = "Invalid email format"
        // feedback not empty
        if (!formData.feedback.trim()) newErrors.feedback = "Feedback is required";

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    return (
        <form onSubmit={handleSubmit} className="">
            <label className="">
                Name:
                <input
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className=""
                />
                {errors.name && <p className="">{errors.name}</p>}
            </label>
            <label className="">
                Email:
                <input
                    type="text" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className=""
                />
                {errors.email && <p className="">{errors.email}</p>}
            </label>
            <label className="">
                Feedback:
                <textarea
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    className=""
                />
                {errors.feedback && <p className="">{errors.feedback}</p>}
            </label>
            <button type="submit" className="">
                Submit
            </button>
        </form>
    );
};

export default FeedbackForm;