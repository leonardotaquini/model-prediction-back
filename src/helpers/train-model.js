import tf from '@tensorflow/tfjs';




export async function trainModel() {
    let model;
    const xs = tf.tensor2d([-6, -5, -4, -3, -2, -1, 0, 1, 2], [9, 1]);
    const ys = tf.tensor2d([0, 2, 4, 6, 8, 10, 12, 14, 16], [9, 1]);

    model = tf.sequential();
    model.add(tf.layers.dense({inputShape: [1], units: 1 }));
    model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
    return await model.fit(xs, ys, {epochs: 250});

    
}
