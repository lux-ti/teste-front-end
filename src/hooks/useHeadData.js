const useHeadData = (title, description) => {
  document.title = `GitHub Search | ${title}`;
  const metaDescription = document.querySelector('meta[name="description"]');
  metaDescription.setAttribute("content", description);
};

export default useHeadData;
