from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "Flask Backend is Running!"

@app.route("/submit", methods=["POST"])
def submit():
    data = request.get_json()

    name = data.get("name")
    address = data.get("address")
    email = data.get("email")
    age = data.get("age")

    print("Name:", name)
    print("Address:", address)
    print("Email:", email)
    print("Age:", age)

    return jsonify({
        "message": f"Student {name} submitted successfully!"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)