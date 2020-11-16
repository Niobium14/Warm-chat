export const followUnfollowCase = (items, itemId, personalId, isFollowed) => {
  return items.map((user) => {
    if (user[personalId] === itemId) {
      return { ...user, ...isFollowed };
    }
    return user;
  });
};
