const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { sign } = require('jsonwebtoken');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id });
                return userData;
            }
            throw new AuthenticationError("User is NOT logged in.")
        },
    },
    
    Mutation: {
        login: async (parent, { email, password }) =>  {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError("No user with this email found...")
            }
        },
    },
}