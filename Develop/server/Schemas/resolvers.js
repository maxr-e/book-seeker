const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
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
            const token = signToken(user);
            return { token, user };
        },
        //create user
        addUser: async (parent, args) => {
            await console.log("resolver test");
            console.log(args);
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        //add book to user's list
        saveBook: async (parent, { bookData }, context) => {
            if (context.user) {
              return User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { savedBooks: bookData } },
                { new: true }
              );
            }
            throw new AuthenticationError("You need to log in");
        },
        //remove book from user's list
        deleteBook: async (parent, { bookId }, context) => {
            if (context.user) {
              return User.findOneAndUpdate(
                { _id: contex.user._id },
                { $pull: { savedBooks: context.bookId } },
                { new: true }
              );
            }
            throw new AuthenticationError("You need to log in");
        }
    },
};

module.exports = resolvers;