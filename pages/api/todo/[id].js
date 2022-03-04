import dbConnect from '../../../utils/dbConnect';
import Todo from '../../../models/Todo';

dbConnect();

export default async (req, res) => {
     console.log(req)
    const {
        query: { id },
        method
    } = req;
    console.log('Inside service [id]');
    switch (method) {
        case 'GET':
            try {
                console.log('Inside get');
                const cert = await Todo.findById(id);
                 console.log({cert})
                if (!cert) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: cert });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
             console.log("In put method", id)
            // let update = JSON.parse(req.body)
             console.log("In put method body", req)
            try {
                Todo.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                }, (err, doc) => {
                    if (err) {
                         console.log({err})
                        return res.status(400).json({ success: false , error: err});
                    }
                     console.log({doc})
                    res.status(200).json({ success: true, data: doc });
                });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                console.log("In delete method", id)
                const deletedCert = await Todo.deleteOne({ _id: id });

                if (!deletedCert) {
                    return res.status(400).json({ success: false })
                }

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false })
            break;
    }
}