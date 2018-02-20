<html>
<head>
	<title><?=$title?></title>
</head>
<body>
	<h1><?=$heading?></h1>

	<?php if ($query->num_rows() > 0): ?>
	<?php foreach ($query->result() as $row): ?>
		<p><?=$row->body?></p>
		<h3><?=$row->author?></h3>
		<hr />
	<?php endforeach; ?>
	<?php endif; ?>
	<p><?=anchor('blog', 'Back to blog');?></p>

	<?=form_open('blog/comment_insert');?>
	<?=form_hidden('blog_id', $this->uri->segment(3));?>
	<p><textarea name="body" rows="10"></textarea></p>
	<p><input type="text" name="author" /></p>
	<p><input type="submit" value="Submit Comment" /></p>
</body>
</html>
