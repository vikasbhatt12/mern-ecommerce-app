const express = require("express");
const router = express.Router();
const User = require('./user.model');
const generateToken = require('../middleware/generateToken');
const verifyToken = require('../middleware/verifyToken');


router.get("/", async (req, res) => {
  res.send("Register succesfully");
});

router.post("/register", async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const user = new User({ email, password, username });
    await user.save();
    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send({ message: "Registration failed" });
  }
});

router.post('/login', async (req, res) => {
  try {
    // console.log(req.body)
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // console.log(user._id)
    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(401).send({ message: 'Invalid credentials' });
    }


    const token = await generateToken(user._id); 
    res.cookie('token', token, { httpOnly: true,
      secure: true, // Ensure this is true for HTTPS
      sameSite: 'None'});

    
      res.status(200).send({ message: 'Logged in successfully', token, user: {
        _id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
        profileImage: user.profileImage,
        bio: user.bio,
        profession: user.profession,
    } });


} catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send({ message: 'Login failed' });
}
});

router.post('/logout', (req, res) => {
  res.clearCookie('token'); 
  res.status(200).send({ message: 'Logged out successfully' });
});


// delete a user
router.delete('/users/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const user = await User.findByIdAndDelete(id);
      if (!user) {
          return res.status(404).send({ message: 'User not found' });
      }
      res.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).send({ message: 'Failed to delete user' });
  }
})



// all users 

router.get('/users', async (req, res) => {
  try {
      const users = await User.find({}, 'id email role').sort({ createdAt: -1 });
      res.status(200).send(users);
  } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).send({ message: 'Failed to fetch users' });
  }
});

// update a user role
router.put('/users/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const { role } = req.body;
      const user = await User.findByIdAndUpdate(id, { role }, { new: true });
      if (!user) {
          return res.status(404).send({ message: 'User not found' });
      }
      res.status(200).send({ message: 'User role updated successfully', user });
  } catch (error) {
      console.error('Error updating user role:', error);
      res.status(500).send({ message: 'Failed to update user role' });
  }
});

router.patch('/edit-profile', async (req, res) => {
  try {
      // Destructure fields from the request body
      const { userId, username, profileImage, bio, profession } = req.body;

      // Check if userId is provided
      if (!userId) {
          return res.status(400).send({ message: 'User ID is required' });
      }

      // Find user by ID
      const user = await User.findById(userId);
      if (!user) {
          return res.status(404).send({ message: 'User not found' });
      }

      // Update the user's profile with provided fields
      if (username !== undefined) user.username = username;
      if (profileImage !== undefined) user.profileImage = profileImage;
      if (bio !== undefined) user.bio = bio;
      if (profession !== undefined) user.profession = profession;

      // Save the updated user profile
      await user.save();

      // Send the updated user profile as the response
      res.status(200).send({
          message: 'Profile updated successfully',
          user: {
              _id: user._id,
              username: user.username,
              email: user.email,
              profileImage: user.profileImage,
              bio: user.bio,
              profession: user.profession,
              role: user.role,
          }
      });
  } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).send({ message: 'Profile update failed' });
  }
});





module.exports = router;
