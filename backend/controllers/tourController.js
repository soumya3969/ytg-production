import Tour from "../models/Tour.js";

// *create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedTour
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try Again.." });
  }
};

// *update tours
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedTour
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to update"
    });
  }
};
// *Delete tours
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted"
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "failed to delete"
    });
  }
};
// *getSingle tours
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successfully Fetched",
      data: tour
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not Found"
    });
  }
};
// *getAll tours
export const getAllTour = async (req, res) => {
  // * For Pagination
  const page = Number(req.query.page);

  // console.log(page);

  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successfully Fetched",
      data: tours
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not Found"
    });
  }
};

// *Get tour by Search
export const getTourBySearch = async (req, res) => {
  //?Here 'i' means case sensitive
  const city = new RegExp(req.query.city, "i");
  const distance = Number(req.query.distance);
  const maxGroupSize = Number(req.query.maxGroupSize);

  try {
    // *gte means greater than equal
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize }
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successfully Fetched",
      data: tours
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not Found"
    });
  }
};

// *get Featured tours
export const getFeaturedTours = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "Successfully Fetched",
      data: tours
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not Found"
    });
  }
};

// * get tour Counts
export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({ success: true, data: tourCount });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to fetch" });
  }
};
