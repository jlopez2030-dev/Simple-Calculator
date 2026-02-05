document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const resultText = document.getElementById("result");

    // Button clicks
    document.querySelectorAll("button[data-value]").forEach(btn => {
        btn.addEventListener("click", () => {
            display.value += btn.dataset.value;
        });
    });

    document.getElementById("equals").addEventListener("click", calculate);
    document.getElementById("clear").addEventListener("click", clearDisplay);

    function calculate() {
        try {
            const result = eval(display.value);
            resultText.textContent = "Result: " + result;
        } catch {
            resultText.textContent = "Invalid expression";
        }
    }

    function clearDisplay() {
        display.value = "";
        resultText.textContent = "Result:";
    }

    // Keyboard support
    document.addEventListener("keydown", (e) => {
        const allowed = "0123456789+-*/.";

        if (allowed.includes(e.key)) {
            display.value += e.key;
        }

        if (e.key === "Enter") {
            calculate();
        }

        if (e.key === "Backspace") {
            display.value = display.value.slice(0, -1);
        }

        if (e.key === "Escape") {
            clearDisplay();
        }
    });
});
