import User from '../models/user.model.js';
import Product from '../models/product.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/errorHandler.js';

const searchItems = async (req, res) => {
    try {
        const { query, limit = 10, page = 1 } = req.query; // Get the search query, limit, and page from the request
        const pageNumber = parseInt(page, 10);
        const limitNumber = parseInt(limit, 10);

        if (!query) {
            throw new ApiError(400, "Search query cannot be empty");
        }

        // Search for users by username or email
        const users = await User.find({
            $or: [
                { username: { $regex: query, $options: 'i' } },
                { email: { $regex: query, $options: 'i' } }
            ]
        })
        .select('-password -refreshToken') // Exclude sensitive fields
        .limit(limitNumber) // Limit results
        .skip((pageNumber - 1) * limitNumber); // Pagination

        // Search for products by product name or description
        const products = await Product.find({
            $or: [
                { product_name: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } }
            ]
        })
        .limit(limitNumber) // Limit results
        .skip((pageNumber - 1) * limitNumber); // Pagination

        // Count total results for pagination
        const totalUsers = await User.countDocuments({
            $or: [
                { username: { $regex: query, $options: 'i' } },
                { email: { $regex: query, $options: 'i' } }
            ]
        });

        const totalProducts = await Product.countDocuments({
            $or: [
                { product_name: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } }
            ]
        });

        return res.status(200).json(new ApiResponse(200, {
            users,
            products,
            pagination: {
                totalUsers,
                totalProducts,
                currentPage: pageNumber,
                totalPages: Math.ceil((totalUsers + totalProducts) / limitNumber)
            }
        }, "Search results retrieved successfully"));
    } catch (error) {
        console.error(error);
        return res.status(error.statuscode || 500).json(new ApiResponse(error.statuscode || 500, null, error.message));
    }
}

export { searchItems };
