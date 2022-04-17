const addCourse = (course) => {
  let cart = [],
    flag = 0;
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  for (const items of cart) {
    if (items.id === course.id) {
      flag = 1;
      break;
    }
  }
  if (flag === 0) {
    cart.push(course);
  }
  localStorage.setItem("cart", JSON.stringify(cart));

  return cart;
};

const addPackage = (item) => {
  let packages = [],
    flag = 0;
  const storedCart = localStorage.getItem("packages");
  if (storedCart) {
    packages = JSON.parse(storedCart);
  }
  for (const items of packages) {
    if (items.id === item.id) {
      flag = 1;
      break;
    }
  }
  if (flag === 0) {
    packages.push(item);
  }
  localStorage.setItem("packages", JSON.stringify(packages));

  return packages;
};

const getCourse = () => {
  let cart = [];
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};
const getPackages = () => {
  let packages = [];
  const storedCart = localStorage.getItem("packages");
  if (storedCart) {
    packages = JSON.parse(storedCart);
  }
  return packages;
};

export { addCourse, addPackage, getCourse, getPackages };
