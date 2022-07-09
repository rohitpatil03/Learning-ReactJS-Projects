const paginate = (followers) => {
    console.log(followers)
    const itemsPerPage = 10
    const division = Math.ceil(followers.length/itemsPerPage);

    const newFollowers = Array.from({ length: division }, (_, index) => {
    const start = index * itemsPerPage
    return followers.slice(start, start + itemsPerPage)
  })

  return newFollowers
    
}

export default paginate
