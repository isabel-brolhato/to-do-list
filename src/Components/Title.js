function Title(items) {
  let listLength = items.items.length;

  return (
    <header>
      <h1 className="title" data-testid="title">
        To Do List ({listLength} tasks)
      </h1>
    </header>
  );
}

export default Title;
