import PostMessage from "../models/postMessage.js";
import mongoose from 'mongoose';

export const getPosts=  async(req, res) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({error});
    }

    };
    
export const createPost=  async(req, res) => {
        try {
            const post = req.body;

            const newPost = new PostMessage(post);
            await newPost.save();
            res.status(201).json(newPost);

        } catch (error) {
            res.status(409).json({error});
        }
        };    
        
export const updatePost=  async(req, res) => {
                const {id: _id} = req.params;
                if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No posts with id ${_id} present!`);
                const post = req.body;
               const updatedPost = await PostMessage.findByIdAndUpdate(_id , {new:true});
               res.json(updatedPost);
    
            
            };    

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No posts with id ${_id} present!`);
  const post = req.body;
  const updatedPost = await PostMessage.findByIdAndRemove(_id);
  res.json({message:'Post deleted successfully!'});
};    

export const likePost=  async(req, res) => {
    const {id: _id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No posts with id ${_id} present!`);
    const post = await PostMessage.findById(_id);
   const updatedPost = await PostMessage.findByIdAndUpdate(_id,{likeCount: post.likeCount+1} , {new:true});
   res.json(updatedPost);


};   