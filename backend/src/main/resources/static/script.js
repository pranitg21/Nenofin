document.getElementById("loanForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        loanAmount: parseFloat(document.getElementById("loanAmount").value),
        loanTerm: parseInt(document.getElementById("loanTerm").value)
    };

    try {
        console.log("Submitting data:", formData);  // ✅ Log data before sending

        const response = await fetch("http://localhost:8080/api/loans", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        console.log("Response received:", response);  // ✅ Log response

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.text();
        console.log("Response text:", result);  // ✅ Log response text

        alert("✅ Form submitted successfully!");  // Show success alert
    } catch (error) {
        console.error("Error:", error.message);  // ✅ Log errors in console
        alert("❌ Failed to submit: " + error.message);
    }
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 Script Loaded - Checking Form Elements");

    console.log("Checking fullName:", document.getElementById("fullName"));
    console.log("Checking email:", document.getElementById("email"));
    console.log("Checking phone:", document.getElementById("phone"));

    document.getElementById("loanForm").addEventListener("submit", async function (e) {
        e.preventDefault();

        // Re-check before form submission
        console.log("🚀 Form submitted!");

        const formData = {
            fullName: document.getElementById("fullName").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            loanAmount: parseFloat(document.getElementById("loanAmount").value),
            loanTerm: parseInt(document.getElementById("loanTerm").value)
        };

        console.log("📤 Sending data:", formData);  // ✅ Log data before sending

        try {
            const response = await fetch("http://localhost:8080/api/loans", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            console.log("📥 Response received:", response);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.text();
            console.log("✅ Success:", result);
            alert("✅ Form submitted successfully!");
        } catch (error) {
            console.error("❌ Error:", error.message);
            alert("❌ Failed to submit: " + error.message);
        }
    });
});
