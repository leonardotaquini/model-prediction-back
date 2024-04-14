
import tf from '@tensorflow/tfjs';

let model;

async function trainModel() {
    const xs = tf.tensor2d([-6, -5, -4, -3, -2, -1, 0, 1, 2], [9, 1]);
    const ys = tf.tensor2d([-6, -4, -2,  0,  2,  4, 6, 8, 10], [9, 1]);

    model = tf.sequential();
    model.add(tf.layers.dense({inputShape: [1], units: 1 }));
    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
    await model.fit(xs, ys, {epochs: 500});

    
}

const train = async(req, res) => {
    try {
        await trainModel();
        res.json({msg: "Modelo entrenado y listo para predecir.", isTrained: true});
    } catch (error) {
        console.log(error);
        res.json({ msg: error.message, isTrained: false });
    }
}

const predict = (req, res) => {
        try {
            const { x } = req.body;
            const result = model.predict(tf.tensor2d([x], [1, 1]));
            res.json({ prediction: result.dataSync()[0], done: true});

        } catch (error) {
            console.log(error);
            res.json({  prediction: 'Error in predicting', done: false});
        }
        
    }

export {
    train,
    predict
}
