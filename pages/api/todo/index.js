import dbConnect from '../../../utils/dbConnect';
import Todo from '../../../models/Todo';

dbConnect();

export default async (req, res) => {
    const { method } = req;
    console.log('Inside service');
    console.log(req.body)
    switch (method) {
        case 'GET':
            console.log('Inside get');
            try {
                const todo = await Todo.find({});
                console.log({todo});
                res.status(200).json({ success: true, data: todo })
            } catch (error) {
                res.status(400).json({ success: false, error });
            }
            break;
        case 'POST':
            console.log('Inside post');
            try {
                console.log('In Try');
               // const dt = {"_id":"6217345b44d1642c01ccdfa8","Name":"Task 8"};
                console.log('data in service',req.body);
                Todo.updateOne()
                const todo = await Todo.create(req.body);
           
                res.status(201).json({ success: true, data: todo })
            } catch (error) {
                console.log('In catch');
                res.status(400).json({ success: false, error });
            }
            break;
        case 'DELETE':
                try {
                    console.log("In delete all method")
                    const deletedCert = await Todo.remove({ });
    
                    if (!deletedCert) {
                        return res.status(400).json({ success: false })
                    }
    
                    res.status(200).json({ success: true, data: {} });
                } catch (error) {
                    res.status(400).json({ success: false })
                }
                break;
      
        default:
            res.status(400).json({ success: false });
            break;
    }
}