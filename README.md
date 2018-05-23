# nodelab

Basic CRUD nodejs api 

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/LakunleD/nodelab.git
# Go into the repository
cd nodelab
# Install dependencies and run the app
docker build -t nodelab -f Dockerfile .
docker run -p 3000:3000 --net=host nodelab
