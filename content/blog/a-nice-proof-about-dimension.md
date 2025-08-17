---
title: "A nice proof about the dimension of the reals over the rationals"
author: "Sam Partington"
description: "To celebrate my new website and test its typesetting, we'll look at a simple but elegant proof from my first-year advanced linear algebra class."
date: "2025-08-02"
tags: []
---

To celebrate the creation of my new website and blog, and also to test the functionality of its typesetting, we will look at a simple yet elegant proof from my first-year advanced linear algebra class.

This question was given on one of our assignments. I was quite pleased with the following solution which I came up with, although I am certainly not the first to do it this way.

<br>

$\textit{Claim}$: $\dim_{\mathbb{Q}} \mathbb{R}$ is infinite (the vector space of the real numbers over the rational numbers is infinite-dimensional).

$\textit{Proof}:$
Let $V$ be the vector space $\mathbb{R}$ over $\mathbb{Q}$. 
Consider the set $S = \{1, \pi, \pi^2, ... \}$ which is a subset of $V$.

We first show that $S$ is linearly independent.

Let $n \in \mathbb{N}$ and define $S_n = \{1, \pi, \pi^2, ..., \pi^n\}$ to be the first $n$ elements of $S$.
Suppose by contradiction that $S_n$ is linearly dependent. This means that 

$$ 
a_1 + a_2\pi + a_3\pi^2 + ... + a_n \pi^{n-1} = 0 
$$

for some $a_1, ..., a_n \in \mathbb{Q}$.

Now consider 
$$ 
P(x) = a_1 + a_2x + a_3x^2 + ... + a_n x^{n-1}. 
$$

Note that $P(x) \in \mathbb{Q}[x]$ and by our assumption, $P(\pi) = 0$.
We have that $\pi$ is the root of a polynomial with rational (equivalently integer) coefficients, which is a contradiction since $\pi$ is transcendental.
Thus $S_n$ is linearly independent, and as a result so is $S$.

Intuitively, this must mean that $V$ has infinite dimension.
To show this rigorously, we suppose that $V$ has finite dimension $m$. 
We know that since $S$ is linearly independent, $|S| <= m$.
But since $S$ has infinite cardinality, $|S| > m$ which is a contradiction.
$\ \square$