import classes from "./Bookmark.module.css";

export default function Bookmark() {
  return (
    <div className={classes.view_bookmarks}>
      <ul>
        <li>
          <p>No bookmark yet.find a nice recipe to bookmark</p>
        </li>
      </ul>
    </div>
  );
}
