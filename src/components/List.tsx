import { Collapse, List as MuiList, ListItem, ListItemText, ListProps } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";

interface Item {
  targetBlank?: boolean
  text: string
  to?: string
  children?: Array<Item>
}

interface Props extends ListProps {
  items: Array<Item>
  divider?: boolean
}

const useStyles = makeStyles((theme) => ({
  nested: {
    backgroundColor: theme.palette.background.secondary,
    borderRadius: theme.spacing(1),
    padding: 10,
  },
}));

const NestedListItem: React.FC<Item> = (props) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClick = () => setOpen(!open);

  return (
    <>
      <ListItem onClick={handleClick}>
        <ListItemText primary={props.text} />
        {open ? <ExpandLess /> : <ExpandMore />}
        
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List items={props.children} divider className={classes.nested} />
      </Collapse>
    </>
  );
};

const List: React.FC<Props> = ({ items, divider, ...rest }) => (
  <MuiList {...rest}>
    {items.map((item, index) => (item.children?.length > 0 ? (
      <NestedListItem key={item.text} {...item}/>
    ) : (
      <ListItem
        key={item.text}
        button
        divider={divider && index < items.length - 1}
        component="a"
        href={item.to}
        target={item.targetBlank?"_blank":"_self"}
        rel="noreferrer noopener"
      >
        <ListItemText primary={item.text} />
      </ListItem>
    )))}
  </MuiList>
);

export default List;
