from flask import Flask, jsonify

app = Flask(__name__)

# @app.route('/')
# ?def hello_flask():
#      return 'Hello, Flask is working!'

@app.route('/api/hello', methods=['GET'])
def hello_react():
        return jsonify({'message': "Hello from Flask!"})

if __name__ == '__main__':
    app.run(debug=True)
