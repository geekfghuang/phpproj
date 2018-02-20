<?php

class Blog extends CI_Controller {
	function Blog() {
		parent::__construct();
		$this->load->helper('url');
		$this->load->helper('form');
	}

	function index() {
		$data['title'] = "My Blog Title";
		$data['heading'] = "My Blog Heading";
		$data['todo'] = array('clean house', 'eat lunch', 'call mom');
		$data['query'] = $this->db->get('blog');
		$this->load->view('blog_view', $data);
	}

	function comments() {
		$data['title'] = "My Comment Title";
		$data['heading'] = "My Comment Heading";
		$this->db->where('blog_id', $this->uri->segment(3));
		$data['query'] = $this->db->get('comment');
		$this->load->view('comment_view', $data);
	}

	function comment_insert() {
		$this->db->insert('comment', $_POST);
		redirect('blog/comments/'.$_POST['blog_id']);
	}
}
